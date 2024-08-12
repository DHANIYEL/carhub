import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@types";
import { generateCarImageUrl } from "@utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModel, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 "></div>
          </Transition.Child>
          <div className="fixed overflow-y-auto inset-0 ">
            <div className=" min-h-full flex justify-center items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full p-6 max-w-full max-h-[90vh] overflow-y-auto transition-all transform rounded-2xl bg-white text-left shadow-xl flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModel}
                    className="bg-primary-blue-100 p-2 absolute top-2 right-2 rounded-full w-fit z-10"
                  >
                    <Image
                      src="/close.svg"
                      alt="close icon "
                      className="object-contain"
                    />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "29")}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 w-full h-24 relative rounded-lg bg-primary-blue-100 ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="car img"
                        />
                      </div>
                      <div className="flex-1 w-full h-24 relative rounded-lg bg-primary-blue-100 ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="car img"
                        />
                      </div>
                      <div className="flex-1 w-full h-24 relative rounded-lg bg-primary-blue-100 ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="car img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h1 className="font-semibold text-xl capitalize ">
                      {car.make} {car.model}
                    </h1>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div className="flex justify-between w-full gap-5 text-right">
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
