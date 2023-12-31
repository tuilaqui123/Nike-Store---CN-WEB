import * as Yup from 'yup';
import { toast } from 'react-toastify';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import './checkout.css'
import CheckoutItem from './checkout item/checkout-item';
import { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '../../Context/AppContext';
import PriceFormat from '../../Context/PriceFormat';

const validationSchema = Yup.object({
    phone: Yup.string()
        .required('Trường này bắt buộc')
        .matches(/^[\+|0]([0-9]{9,14})\b/, 'Số điện thoại không hợp lệ'),

    address: Yup.string().required('Trường này bắt buộc'),
});

const CheckOut = () => {

    const { bag, subTotal, customer } = useContext(AppContext)
    const [loading, setLoading] = useState(false);
    const [couponInput, setCouponInput] = useState('');
    const [coupon, setCoupon] = useState(null);
    const [validateOnChange, setValidateOnChange] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const navigate = useNavigate();

    const form = useFormik({
        initialValues: {
            phone: '',
            address: '',
        },
        validationSchema,
        onSubmit: handleFormsubmit,
        validateOnBlur: false,
        validateOnChange: validateOnChange,
    });

    useEffect(() => {
        const coupon = coupons.find((c) => c.name === couponInput);
        setCoupon(coupon || null);
    }, [couponInput]);

    useEffect(() => {
        if (customer) {
            form.setFieldValue('phone', customer.phone);
            fetch('http://localhost:5000/api/coupon/get-by-customer/' + customer?._id)
                .then((res) => res.json())
                .then((resJson) => {
                    if (resJson.success) {
                        setCoupons(resJson.coupons);
                    } else {
                        setCoupons([]);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setCoupons([]);
                });
        } else {
            form.setFieldValue('phone', '');
        }
    }, [customer]);

    const intoMoney = useMemo(() => {
        if (!coupon) {
            return subTotal;
        }
        if (!coupon?.canUse) {
            return subTotal;
        }
        return subTotal - (subTotal * coupon?.discountPercent) / 100;
    }, [coupon, subTotal]);

    console.log(bag, subTotal)

    function handleFormsubmit(values) {
        setLoading(true);
        const details = bag.map((b) => ({
            productSize: b.productSize._id,
            quantity: b.quantity,
            price: b.item.price,
        }));
        fetch('http://localhost:5000/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerId: customer?._id,
                deliveryStatus: 'pending',
                paymentStatus: 'unpaid',
                details: details,
                receivedMoney: intoMoney,
                totalPrice: subTotal,
                intoMoney: intoMoney,
                coupon: coupon?.canUse ? coupon?._id : null,
                exchangeMoney: 0,
                phone: values.phone,
                address: values.address,
            }),
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.success) {
                    // TODO: handle reset bag
                    toast.success('Đặt hàng thành công');
                    setValidateOnChange(false);
                    navigate('/');
                } else {
                    toast.error('Có lỗi xảy ra');
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error('Có lỗi xảy ra');
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="checkout-container">
            <form className="address" 
                onSubmit={(e) => {
                    setValidateOnChange(true);
                    form.handleSubmit(e);
                }}>
                <h3>Checkout Infomation</h3>
                <div className="address-input">
                    {/* <div className="input-box">
                        <p>First name:</p>
                        <input
                            type="text"
                            placeholder="First name"
                        />
                    </div>
                    <div className="input-box">
                        <p>Last name:</p>
                        <input
                            type="text"
                            placeholder="Last name"
                        />
                    </div>
                    <div className="input-box">
                        <p>Email:</p>
                        <input
                            type="text"
                            placeholder="Email"
                        />
                    </div> */}
                    <div className="input-box">
                        <p>Phone number:</p>
                        {customer && (
                            <button
                                type="button"
                                className=""
                                onClick={() => form.setFieldValue('phone', customer.phone)}
                            >
                                Mặc định
                            </button>
                        )}
                        <input
                            type="text"
                            placeholder="Phone number"
                            className={clsx('text-input', {
                                'invalid': form.errors.phone,
                            })}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.phone}
                            name='phone'
                        />
                        <span
                            className={clsx('error-message', {
                                'show': form.errors.phone,
                            })}
                        >
                            {form.errors.phone || 'No message'}
                        </span>
                    </div>
                    <div className="input-box">
                        <p>Address:</p>
                        {customer && (
                            <button
                                type="button"
                                className=""
                                onClick={() => form.setFieldValue('address', customer.address)}
                            >
                                Mặc định
                            </button>
                        )}
                        <input
                            type="text"
                            placeholder="Address"
                            className={clsx({
                                'invalid': form.errors.address,
                            })}
                            onChange={form.handleChange}
                            value={form.values.address}
                            onBlur={form.handleBlur}
                            name="address"
                        />
                        <span
                            className={clsx('error-message', {
                                'show': form.errors.address,
                            })}
                        >
                            {form.errors.address || 'No message'}
                        </span>
                    </div>

                    {/* DISPLAY COUPON WHEN CUSTOMER LOGIN */}
                    {customer && (
                        <div>
                            <div className='input-box'>
                                <p>Coupon:</p>
                                <input
                                    type="text"
                                    placeholder="Coupon"
                                    value={couponInput}
                                    onChange={(e) => setCouponInput(e.target.value)}
                                />
                            </div>
                            {/* DISPLAY COUPON INFOR IF COUPON NAME MATCH */}
                            {coupon && (
                                <div
                                    className={clsx('coupon', {
                                        'coupon-can-use': coupon.canUse,
                                        'coupon-cannot-use': !coupon.canUse,
                                    })}
                                >
                                    <p className="">
                                        {coupon.description}
                                    </p>
                                    <div className="">
                                        <div className="">
                                            <span className="">Giảm:</span>
                                            <span className="">
                                                {coupon.discountPercent + '%'}
                                            </span>
                                        </div>

                                        {coupon.canUse ? (
                                            <div className="">
                                                Có thể dùng
                                            </div>
                                        ) : (
                                            <div className="">
                                                Hết lượt dùng
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                            
                    )}
                    
                </div>
                <button className="address-button">
                    <p>Order</p>
                </button>
            </form>
            <div className="summary">
                <h3>Summary</h3>
                <div className="summary-main">
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Subtotal</p>
                            <p>
                                <PriceFormat>
                                    {subTotal}
                                </PriceFormat>
                                VNĐ</p>
                        </div>
                        <div className="summary-content">
                            <p>Delivery/Shipping</p>
                            <p>250,000 VNĐ</p>
                        </div>
                    </div>
                    <div className="summary-section">
                        <div className="summary-content">
                            <p>Total</p>
                            <p>
                                <PriceFormat>
                                    {intoMoney}
                                </PriceFormat>
                                VNĐ</p>
                        </div>
                    </div>
                </div>
                <div className="checkout-items">
                    {bag.map((item, index) =>
                        <CheckoutItem
                            key={index}
                            item={item}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CheckOut;