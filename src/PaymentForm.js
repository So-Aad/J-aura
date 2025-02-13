import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  return (
    <div className="container mt-5 p-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h2 className="card-title text-center mb-4">Payment Details</h2>
            <form>
              {/* Stripe Card Element */}
              <div className="form-group">
                <label htmlFor="card-element">Credit or Debit Card</label>
                <div className="border p-3 rounded">
                  <CardElement id="card-element" />
                </div>
              </div>

              {/* Payment Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 mt-4"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
