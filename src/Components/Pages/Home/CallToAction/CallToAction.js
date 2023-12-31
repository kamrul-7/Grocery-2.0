import React from "react";

const CallToAction = () => {
    return (
        <section className="py-6 my-10 rounded bg-gray-200 dark:bg-gray-800 dark:text-gray-50">
            <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                <div className="flex flex-col space-y-4 text-center lg:text-left">
                    <h1 className="lg:text-4xl text-3xl font-bold leading-none">
                        Stay with Grocery 2.0
                    </h1>
                    <p className="text-sm lg:max-w-md">
                        Could you please clarify your question or provide more context so I can better assist you?
                    </p>
                </div>
                <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
                    <div className="flex flex-row">
                        <input
                            type="text"
                            placeholder="your@email.com"
                            className="w-3/5 p-3 px-6 text-gray-600 rounded-l sm:w-2/3 placeholder:text-sm focus:outline-none"
                        />
                        <button
                            type="button"
                            className="w-2/5 lg:w-72 p-2 rounded-r sm:w-1/3 bg-emerald-800 text-white"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;