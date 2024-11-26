"use client"
import React from 'react'
import { Measure, VexFlowRenderer } from 'accidentaljs'

function Client() {
    const measures: Measure[] = [{
        hasTimeSignature: true,
        timeSignature: "4/4",
        notes: [{
            keys: ['C/4'],
            duration: 'q'
        }, {
            keys: ['D/4'],
            duration: 'q'
        }, {
            keys: ['E/4'],
            duration: 'q'
        }, {
            keys: ['F/4'],
            duration: 'q'
        }]
    }]

    return (
        <VexFlowRenderer measures={measures} />
    )
}

export default Client