import * as React from "react";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SentimentGraph(predictedNum) {
    //array of the past 8 sentiments
    const[sentimentArr, setSentimentArr] = useState([])

    useEffect(() => {       
        if(sentimentArr.length == 8) {
            sentimentArr.shift() //shift first off of the array
        }
        //push predicted number to the array
        setSentimentArr([...sentimentArr, predictedNum])
    }, [predictedNum])

    return (
        <div className="SentimentGraph">
            <LineChart width={730} height={250} data={sentimentArr}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
            </LineChart>
        </div>
    );
}
