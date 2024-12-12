import React from "react";

export default function Home() {
    return (
        <main className="py-8 m-auto bg-zinc-600">
            <div className="flex justify-center items-center h-fit">
                <section className="container overflow-hidden p-5 m-auto rounded-lg shadow-lg bg-zinc-400">
                    <h2 className="pb-2 text-xl font-bold">Behold Charon!</h2>
                    <div className="mb-3">
                        <img
                            src="/public/Images/Charon/PIA19966.jpg"
                            className="object-cover w-full rounded-md"
                        />
                    </div>
                    <p>
                        An argument made by some is that Charon and Pluto are a
                        binary system where the two bodies orbit around a
                        barycenter that is outside of both bodies. Therefore,
                        the heretics argue, Pluto should not be a planet because
                        it is not large enough to contain its own barycenter.
                    </p>
                    <p>
                        But on the contrary, that simply means that both bodies
                        must be called planets; we would therefore now have 10
                        planets instead of the heretical 8. This solution, all
                        will agree, is the true, right, and just one.
                    </p>
                </section>
            </div>
        </main>
    );
}
