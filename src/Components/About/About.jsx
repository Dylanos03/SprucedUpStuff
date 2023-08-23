import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faSterlingSign,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="bg-white flex lg:flex-row flex-col rounded-t-lg">
      <div className="py-12 px-4">
        <h2 className="text-2xl py-4 font-semibold">About Me</h2>
        <p className="text-sm">
          I’ve always had an interest in interior design and love sprucing up
          the rooms in our house. <br />
          <br /> A change in circumstances gave me the opportunity to have a go
          at up-cycling my own furniture and bring it back to life
        </p>
      </div>
      <div className="py-8 px-4">
        <div className="py-8">
          <h2 className="text-2xl py-4 font-semibold">What I do</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="py-4">
            <FontAwesomeIcon
              icon={faSterlingSign}
              color="Black"
              className=" h-16 w-16 pb-4"
            />
            <h3 className="text-xl font-semibold">Sell</h3>
            <p>Check out my facebook to see what I am selling!</p>
          </div>
          <div className="py-4">
            <FontAwesomeIcon
              icon={faHandHoldingDollar}
              color="Black"
              className=" h-16 w-16 pb-4"
            />
            <h3 className="text-xl font-semibold">Buy</h3>
            <p>Got some old furniture you don’t need?</p>
          </div>
          <div className="py-4">
            <FontAwesomeIcon
              icon={faPaintBrush}
              color="Black"
              className=" h-16 w-16 pb-4"
            />
            <h3 className="text-xl font-semibold">Refurb</h3>
            <p>Got some furniture that needs a bit of TLC?</p>
          </div>
          <div className="py-4">
            <div className="pb-2">
              <h3 className="text-xl font-semibold">Follow me on socials!</h3>
            </div>
            <div className="flex justify-center gap-2 items-center py-2">
              <FontAwesomeIcon
                icon={faInstagram}
                color="Black"
                className="h-8 w-8 cursor-pointer"
                href="https://www.instagram.com/spruced_up_stuff/?hl=en"
              />
              <p>@spruced_up_stuff</p>
            </div>
            <div className="flex justify-center gap-2 items-center py-2">
              <FontAwesomeIcon
                icon={faFacebook}
                color="Black"
                className="h-8 w-8 cursor-pointer"
                href="https://www.facebook.com/SprucedUpStuff"
              />
              <p>sprucedupstuff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
