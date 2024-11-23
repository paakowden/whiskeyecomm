"use client";
//import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import React from "react";

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "ad73fad3-3808-4469-9090-062f18095f9f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    (event.target as HTMLFormElement).reset();
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <div>
      <div className="bg-[url('/assets/images/3Whiskey_5_dark.jpg')] bg-center bg-cover">
        <h1
          className="container py-64 text-6xl font-semibold tracking-widest text-center
        text-white"
        >
          Contact Us
        </h1>
      </div>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Sales
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Please feel free to ask any question
          </p>
        </div>
        <h3 className="items-center text-center ">Line 1: (+233594346534)</h3>
        <h3 className="items-center text-center ">Line 2: (+233245365939)</h3>
        <h3 className="items-center text-center ">
          {""}Email: info@3whiskey.com
        </h3>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="mt-2.5">
              <Input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="mt-2.5">
              <Input type="text" name="lastname" placeholder="Last Name" />
            </div>

            <div className="sm:col-span-2">
              <div className="mt2.5">
                <Input type="text" name="company" placeholder="Company" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt2.5">
                <Input type="email" name="email" placeholder="Email Address" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="mt2.5">
                <Textarea
                  name="message"
                  placeholder="Type Your Message Here..."
                />
              </div>
            </div>

            <Switch.Group as="div" className="flex gap-x4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-paa" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  <span className="sr-only text-white">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 pl-4">
                By selecting this, you agree to our
                <a href="#" className="font-semibold text-paa">
                  {""} privacy&nbsp;policy
                </a>
              </Switch.Label>
            </Switch.Group>
            <div className="mt-10">
              <button
                className="w-36 text-sm rounded-3xl ring-1 ring-paa text-paa py-2 px-4 
      hover:bg-paa hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 
      disabled:ring-0 disabled:text-white disabled:ring-none"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
