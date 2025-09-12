'use client'

import { useState, useRef, useEffect } from "react"
import { animate, createScope, createSpring, createDraggable } from 'animejs';

export default function Canvas() {

    useEffect(() => {
        const canvas = document.getElementById("canvas-hero");
        if (canvas.getContext) {
            const ctx = canvas.getContext("2d");
            // drawing code here
        } else {
            // canvas-unsupported code here
        }
    }, [])

    return (
        <canvas id="canvas-hero" width="150" height="150" >
            test
        </canvas>
    )