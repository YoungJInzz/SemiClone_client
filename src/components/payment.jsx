import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

const Payment = ({ pointInfo, person }) => {
  const [totalFee, setTotalFee] = useState(2000);
  const [totalFeeFix, setTotalFeeFix] = useState(2000);
  const [step, setStep] = useState("");
  const [coupon, setCoupon] = useState("");
  const [giftcon, setGiftcone] = useState("");
  const [point, setPoint] = useState("");
  const [discountByCoupons, setDiscountByCoupons] = useState(0);
  const [discountByPoint, setDiscountByPoint] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isPointApplied, setIsPointApplied] = useState(false);
  const parentRef = useRef();
  const childRef = useRef();

  useEffect(() => {
    let totalNum = person.adult + person.teen + person.senior;
    setTotalFee(totalNum * 1000);
    setTotalFeeFix(totalNum * 1000);
    setPayResultPosition();
    function watchScroll() {
      window.addEventListener("scroll", setPayResultPosition);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", setPayResultPosition);
    };
  }, [person]);

  const setPayResultPosition = () => {
    let target = document.querySelector("html").scrollTop;

    let parentOffset = parentRef.current.offsetTop;
    let parentHeight = parentRef.current.clientHeight;
    let childHeight = childRef.current.clientHeight;
    let maxHeight = parentOffset + parentHeight - childHeight;
    let val1 = 50 + maxHeight - parentOffset;
    let val2 = 50 + target - parentOffset;

    if (target > maxHeight) {
      childRef.current.style.marginTop = `${val1}px`;
    } else if (target > parentOffset && target < maxHeight) {
      childRef.current.style.marginTop = `${val2}px`;
    } else {
      childRef.current.style.marginTop = "50px";
    }
  };

  const handleStep = (x) => {
    if (step === x) {
      setStep("");
    } else setStep(x);
  };
  const handleCheckbox = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    setDiscountByCoupons(checkedBoxes.length * 1000);
  };
  const applyCoupon = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    let initCheckbox = () => {
      for (let item of checkedBoxes) {
        item.checked = false;
      }
    };
    if (checkedBoxes.length === 0) {
      alert("쿠폰을 선택해주세요");
    } else {
      if (totalFee === 0) {
        alert("이미 최종금액이 0원입니다");
      } else {
        if (isCouponApplied) {
          if (
            window.confirm("이미쿠폰이 적용되었습니다 초기화 하시겠습니까?")
          ) {
            setIsCouponApplied(false);
            setTotalFee(totalFee + discountByCoupons);
            setDiscountByCoupons(0);
            initCheckbox();
          }
        } else {
          if (totalFee - discountByCoupons < 0) {
            setTotalFee(0);
            setIsCouponApplied(true);
            for (let item of checkedBoxes) {
              item.checked = false;
            }
          } else setTotalFee(totalFee - discountByCoupons);
          setIsCouponApplied(true);
          initCheckbox();
        }
      }
    }
  };
  const resetCoupon = () => {
    let checkedBoxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    for (let item of checkedBoxes) {
      item.checked = false;
    }
    setTotalFee(totalFee + discountByCoupons);
    setDiscountByCoupons(0);
  };
  const resetPoint = () => {
    document.getElementsByClassName("appliedPoint")[0].value = 0;
    setIsPointApplied(false);
    setTotalFee(totalFee + discountByPoint);
    setDiscountByPoint(0);
  };

  const handlePoint = () => {
    let elValue = Number(
      document.getElementsByClassName("appliedPoint")[0].value
    );

    if (elValue === 0) {
      alert("포인트를 입력해주세요");
    } else {
      if (elValue > pointInfo.giftCards[0].giftCardBalance) {
        alert("포인트잔액을 초과하였습니다");
        document.getElementsByClassName("appliedPoint")[0].value = 0;
      } else {
        if (totalFee === 0) {
          alert("이미 최종결제금액이 0원입니다.");
          document.getElementsByClassName("appliedPoint")[0].value = 0;
        } else {
          if (isPointApplied) {
            if (
              window.confirm("이미포인트가 적용되었습니다 초기화하시겠습니까?")
            ) {
              document.getElementsByClassName("appliedPoint")[0].value = 0;
              setIsPointApplied(false);
              setTotalFee(totalFee + discountByPoint);
              setDiscountByPoint(0);
            }
          } else {
            setDiscountByPoint(elValue);
            if (totalFee - elValue < 0) {
              document.getElementsByClassName("appliedPoint")[0].value = 0;
              setTotalFee(0);
              setIsPointApplied(true);
            } else {
              setTotalFee(totalFee - elValue);
              document.getElementsByClassName("appliedPoint")[0].value = 0;
              setIsPointApplied(true);
            }
          }
        }
      }
    }
  };
  return (
    <div>
      <div className="pay-container" ref={parentRef}>
        <div className="pay-method">
          <div className="pay-step">
            <div className="pay-titlebar">
              <span>STEP 1</span>
              <span
                className="again"
                onClick={() => {
                  resetCoupon();
                }}
              >
                다시하기
                <IoMdRefresh className="refresh-icon2" />
              </span>
            </div>
            <div className="pay-header" onClick={() => handleStep(1)}>
              <span>관람권/기프트콘</span>
              <FaChevronDown
                className={"down-icon" + (step === 1 ? " hide" : " show")}
              />
              <FaChevronUp
                className={"down-icon" + (step === 1 ? " show" : " hide")}
              />
            </div>
            <div className={"pay-body" + (step === 1 ? " show" : " hide")}>
              <div className="select-discount">
                <div
                  className={
                    "discount-item" + (coupon === 1 ? " couponSelected" : "")
                  }
                  onClick={() => setCoupon(1)}
                >
                  영화관람권 <FaChevronRight className="right-icon" />{" "}
                </div>
                <div
                  className={
                    "discount-item" + (coupon === 2 ? " couponSelected" : "")
                  }
                  onClick={() => setCoupon(2)}
                >
                  cgv기프트콘 <FaChevronRight className="right-icon" />
                </div>
              </div>
              <div
                className={"select-form " + (coupon === 1 ? " show" : " hide")}
              >
                <div className="discount-list-header">
                  <span className="col1">사용가능 쿠폰</span>
                  <span className="col2">유효기간</span>
                </div>
                <div className="discount-list-body">
                  {pointInfo.movieCoupons.map((item) => (
                    <div className="coupone-item">
                      <input
                        type="checkbox"
                        className="couponCheckBox"
                        onClick={() => handleCheckbox()}
                      />
                      <span className="col1">영화관람권</span>
                      <span className="col2">{item.movieCouponEndDate}</span>
                    </div>
                  ))}
                  <div>
                    <div className="result-form">
                      <button
                        className="coupon-applyButton"
                        onClick={() => applyCoupon()}
                      >
                        적용하기
                      </button>{" "}
                      <span>할인금액{discountByCoupons}원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={"select-form " + (coupon === 2 ? " show" : " hide")}
              >
                <div className="NoCoupon">사용가능한 쿠폰이 없습니다</div>
              </div>
            </div>
          </div>

          <div className="pay-step">
            <div className="pay-titlebar">
              <span>STEP 2</span>
              <span className="again">
                다시하기
                <IoMdRefresh className="refresh-icon2" />
              </span>
            </div>

            <div className="pay-header" onClick={() => handleStep(2)}>
              <span>할인쿠폰</span>
              <FaChevronDown
                className={"down-icon" + (step === 2 ? " hide" : " show")}
              />
              <FaChevronUp
                className={"down-icon" + (step === 2 ? " show" : " hide")}
              />
            </div>
            <div className={"pay-body" + (step === 2 ? " show" : " hide")}>
              <div className="select-discount">
                <div
                  className={
                    "discount-item" + (giftcon === 1 ? " couponSelected" : "")
                  }
                  onClick={() => setGiftcone(1)}
                >
                  cgv할인쿠폰
                  <FaChevronRight className="right-icon" />{" "}
                </div>

                <div
                  className={
                    "discount-item" + (giftcon === 2 ? " couponSelected" : "")
                  }
                  onClick={() => setGiftcone(2)}
                >
                  CJ ONE할인쿠폰
                  <FaChevronRight className="right-icon" />
                </div>
              </div>
              <div
                className={"select-form " + (giftcon === 1 ? " show" : " hide")}
              >
                <div className="NoCoupon">사용가능한 쿠폰이 없습니다</div>
              </div>
              <div
                className={"select-form " + (giftcon === 2 ? " show" : " hide")}
              >
                <div className="NoCoupon">사용가능한 쿠폰이 없습니다</div>
              </div>
            </div>
          </div>
          <div className="pay-step">
            <div className="pay-titlebar">
              <span>STEP 3</span>
              <span className="again" onClick={() => resetPoint()}>
                다시하기
                <IoMdRefresh className="refresh-icon2" />
              </span>
            </div>
            <div className="pay-header" onClick={() => handleStep(3)}>
              <span>포인트</span>
              <FaChevronDown
                className={"down-icon" + (step === 3 ? " hide" : " show")}
              />
              <FaChevronUp
                className={"down-icon" + (step === 3 ? " show" : " hide")}
              />
            </div>
            <div className={"pay-body" + (step === 3 ? " show" : " hide")}>
              <div className="select-discount">
                <div
                  className={
                    "discount-item" + (point === 1 ? " couponSelected" : "")
                  }
                  onClick={() => setPoint(1)}
                >
                  CJ ONE포인트 <FaChevronRight className="right-icon" />{" "}
                </div>

                <div
                  className={
                    "discount-item" + (point === 2 ? " couponSelected" : "")
                  }
                  onClick={() => setPoint(2)}
                >
                  CJ 기프트카드 <FaChevronRight className="right-icon" />
                </div>
              </div>
              <div
                className={"select-form " + (point === 1 ? " show" : " hide")}
              >
                <div className="NoCoupon">사용가능한 쿠폰이 없습니다</div>
              </div>
              <div
                className={"select-form " + (point === 2 ? " show" : " hide")}
              >
                <div className="giftCard">
                  <span className="col1">카드보유금액</span>
                  <span className="col2">
                    {pointInfo.giftCards[0].giftCardBalance} 원
                  </span>
                  <span className="col3">적용금액</span>
                  <input
                    className="appliedPoint"
                    defaultValue="0"
                    size="4"
                  ></input>
                  <span className="col4">원</span>
                  <span className="col5">
                    <button
                      className="coupon-applyButton"
                      onClick={() => handlePoint()}
                    >
                      적용하기
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pay-step">
            <div className="pay-titlebar">
              <span className="col1">STEP 4 최종결제 수단</span>
            </div>
            <div className={"pay-body2"}>
              <div className="pay-way">
                <input type="radio" id="card" name="gender" value="card" />
                <label className="label" htmlFor="card">
                  카드
                </label>
                <input type="radio" id="phone" name="gender" value="phone" />
                <label className="label" htmlFor="phone">
                  휴대폰결제
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="payresult" ref={childRef}>
          <div className="priceToPayContainer">
            <div className="priceToPayHead">결제하실금액</div>
            <div className="priceToPayBody">
              <span className="col10">{totalFeeFix}</span>
              <span className="col11">원</span>
            </div>
          </div>
          <div className="priceToPayContainer">
            <div className="priceToPayHead">할인금액</div>
            <div className="priceToPayBody">
              <span className="col10">{totalFeeFix - totalFee}</span>
              <span className="col11">원</span>
            </div>
          </div>
          <div className="priceToPayContainer">
            <div className="priceToPayHead">최종결제금액</div>
            <div className="priceToPayBody">
              <span className="col10">{totalFee}</span>
              <span className="col11">원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
