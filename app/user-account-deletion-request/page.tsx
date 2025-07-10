"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";

export default function UserAccountDeleteRequest() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const sendAccountDeletionRequest = async () => {
    const email = emailRef.current?.value ?? "";
    const url =
      "https://asia-south1-com-bereej-rdss.cloudfunctions.net/sendAccountDeletionRequest";

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setErrorMessageVisible(true);
      setTimeout(() => setErrorMessageVisible(false), 5000);
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Error sending account deletion request");
      }

      const data = await response.json();
      console.log("Account deletion request sent successfully:", data);

      setSuccessMessageVisible(true);
      setTimeout(() => setSuccessMessageVisible(false), 5000);

      if (emailRef.current) emailRef.current.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="w-full">
      <section className="nav bg-black p-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src="/images/logo.png" width={140} height={140} alt="logo" />
            </div>
          </div>
        </div>
      </section>
      <div className="row py-24 pt-32 flex flex-row items-center justify-center">
        <div className="col-md-4"></div>
        <div className="col-md-4" style={{ marginLeft: "100px" }}>
          <div>
            <h4 className="my-8 text-lg font-semibold">
              Account Deletion Request
            </h4>
            <form className="space-y-4">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  ref={emailRef}
                  style={{
                    width: "300px",
                    borderRadius: "5px",
                    border: "1px solid gray",
                  }}
                  type="email"
                  id="email"
                  required
                />
                <br />
                <br />
                {errorMessageVisible && (
                  <div className="mt-3" style={{ color: "red" }}>
                    Please enter a valid email address.
                  </div>
                )}
              </div>
              <div className="form-group" style={{ marginRight: "30px" }}>
                <Button
                  type="button"
                  className="w-full py-3 text-base cursor-pointer"
                  onClick={sendAccountDeletionRequest}
                >
                  Delete Account
                </Button>
              </div>
            </form>
            {successMessageVisible && (
              <div className="mt-3" style={{ color: "green" }}>
                Account deletion request sent successfully!
              </div>
            )}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </section>
  );
}
