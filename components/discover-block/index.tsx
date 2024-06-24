import Image from 'next/image';

import { Button } from '../ui/button';
import React from 'react';

export const DiscoverBlock = () => (
    <div className="flex-col">
        <p className="text-3xl text-center mb-3">Discover Our Oboe Reeds</p>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="flex md:w-1/7 hidden md:block">
                <Image
                    alt="Oboe Reed outline"
                    className="mx-auto"
                    width="120"
                    height="385"
                    src="https://mshippoboe.s3.us-west-1.amazonaws.com/reed_outline.png"
                />
            </div>
            <div className="md:w-6/7 p-4">
                <div className="inline-flex flex-col md:flex-row">
                    <div className="flex-1">
                        <h3 className="text-xl bg-yellow-300 p-4 m-2 text-center">Practice Reed</h3>
                        <div className="bg-yellow-300 p-4 m-2 text-left">
                            <ul className="pl-2 list-disc">
                                <li>Entry-level reed</li>
                                <li>Student-friendly</li>
                                <li>Comfortable response</li>
                                <li>Light resistance</li>
                            </ul>
                        </div>
                        <div className="bg-yellow-300 p-4 m-2">
                            <Button asChild className="margin-auto">
                                <a href="/practice-oboe-reed/">Shop now</a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl mb-2 bg-green-300 p-4 m-2 text-center">Rehearsal Reed</h3>
                        <div className="bg-green-300 p-4 m-2 text-left">
                            <ul className="pl-2 list-disc">
                                <li>Ease of play</li>
                                <li>Dependable</li>
                                <li>Stable intonation</li>
                                <li>Great value</li>
                            </ul>
                        </div>
                        <div className="bg-green-300 p-4 m-2">
                            <Button asChild className="margin-auto">
                                <a href="/rehearsal-oboe-reed/">Shop now</a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 w-100">
                        <h3 className="text-xl bg-blue-300 p-4 m-2 text-center">Performance Reed</h3>
                        <div className="bg-blue-300 p-4 m-2 text-left">
                            <ul className="pl-2 list-disc">
                                <li>Superior tone quality</li>
                                <li>Increased reliability</li>
                                <li>High-quality cane and materials</li>
                            </ul>
                        </div>
                        <div className="bg-blue-300 p-4 m-2">
                            <Button asChild className="margin-auto">
                                <a href="/performance-oboe-reed/">Shop now</a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl bg-purple-300 p-4 m-2 text-center">Concerto Reed</h3>
                        <div className="bg-purple-300 p-4 m-2 text-left md:min-h-32">
                            <ul className="pl-2 list-disc">
                                <li>Increased longevity</li>
                                <li>Exceptional tone</li>
                                <li>Superior dynamic range</li>
                                <li>Premium materials</li>
                            </ul>
                        </div>
                        <div className="bg-purple-300 p-4 m-2">
                            <Button asChild className="margin-auto">
                                <a href="/concerto-oboe-reed/">Shop now</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
