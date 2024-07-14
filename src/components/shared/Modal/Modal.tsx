import { Button } from "@/components/ui/button";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";
import { FaXmark } from "react-icons/fa6";

type PropsType = {
  show: boolean;
  title: string;
  type?: "default" | "form";
  variant: "submit" | "delete";
  onConfirm: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = (props: PropsType) => {
  return (
    <Transition show={props.show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="ease-in duration-200"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full mx-4 sm:w-full sm:max-w-lg sm:p-6">
                <DialogTitle className="font-bold">{props.title}</DialogTitle>

                <button
                  onClick={props.onClose}
                  className="absolute top-2 right-2 p-2 rounded-full text-gray-800 hover:bg-gray-100"
                >
                  <FaXmark size={20} />
                </button>
                <div className="py-2">
                  <hr />
                  <div className="py-6">{props.children}</div>
                  {props.type !== "form" && (
                    <div>
                      <hr />
                      <div className="flex justify-end mt-4">
                        {props.variant === "submit" && (
                          <Button
                            variant={"secondary"}
                            className="h-8"
                            onClick={() => {
                              props.onConfirm();
                            }}
                          >
                            Submit
                          </Button>
                        )}
                        {props.variant === "delete" && (
                          <Button
                            variant={"destructive"}
                            className="h-8"
                            onClick={() => {
                              props.onConfirm();
                            }}
                          >
                            Delete
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
