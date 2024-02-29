import { useState } from "react";
import tripleSlogo from "../../assets/triples-logo.png";
import artmslogo from "../../assets/artms-logo.png";
import Image from "next/image";

export default function objektFilter() {

  return (
    <div className="flex items-center bg-gray-200 rounded-md border-4 border-indigo-500/75 shadow-xl text-black">
      <div className="flex items-center">
        <button>
          <Image
            src={tripleSlogo}
            alt="Landscape picture"
            width={20}
            height={20}
          />
        </button>
        <button>
          <Image
            src={artmslogo}
            alt="Landscape picture"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label className="sr-only">Choose a state</label>
          <select
            id="states"
            className="bg-gray-50 bordertext-gray-900 text-sm rounded-lg border-gray-300 text-black"
          >
            <option value="">Choose S</option>
            <option value="S1 SeoYeon">S1</option>
            <option value="S2 HyeRin">S2</option>
            <option value="S3 JiWoo">S3</option>
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label className="sr-only">Choose a state</label>
          <select
            id="states"
            className="bg-gray-50 bordertext-gray-900 text-sm rounded-lg border-gray-300 text-black"
          >
            <option value="">Choose season</option>
            <option value="atom">atom</option>
            <option value="binary">binary</option>
            <option value="cream">cream</option>
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label className="sr-only">Choose a state</label>
          <select
            id="states"
            className="bg-gray-50 bordertext-gray-900 text-sm rounded-lg border-gray-300 text-black"
          >
            <option value="">Choose class</option>
            <option value="first">first</option>
            <option value="double">double</option>
            <option value="special">special</option>
          </select>
        </form>
      </div>
      <div>
        <form className="max-w-sm mx-auto">
          <label className="sr-only">Choose a state</label>
          <select
            id="states"
            className="bg-gray-50 bordertext-gray-900 text-sm rounded-lg border-gray-300 text-black"
          >
            <option value="">Choose Type</option>
            <option value="a">A</option>
            <option value="z">Z</option>
          </select>
        </form>
      </div>
      <div>
      <form >
              <div>
                <input
                  className="mx-2 my-1 px-2 py-1 border-2 border-solid rounded-lg text-black"
                  type="id"
                  id="id"
                  name="id"
                  placeholder="number"
                  title="number"
                />
              </div>
        </form>
      </div>
    </div>
  );
}
