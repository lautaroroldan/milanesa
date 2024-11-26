"use client"
import React from 'react'
import { Measure, VexFlowRenderer } from 'accidentaljs'

function Client({ measures }: { measures: Measure[] }) {

    return (
        <VexFlowRenderer measures={measures} />
    )
}

export default Client