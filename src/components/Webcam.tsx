import { useRef, useEffect } from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8888");

interface Props {
    streamUrl: string;
}

export default function Webcam() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // const handleSuccess = async (stream: MediaStream) => {
        //     if (videoRef.current) {
        //         videoRef.current.srcObject = stream;
        //     }

        //     const mediaRecorder = new MediaRecorder(stream);
        //     let chunks: Blob[] = [];
        //     mediaRecorder.ondataavailable = (event: any) => {
        //         chunks.push(event.data);
        //         let canvas = document.createElement("canvas");
        //         canvas.width = videoRef.current?.videoWidth!;
        //         canvas.height = videoRef.current?.videoHeight!;

        //         let context = canvas.getContext("2d");
        //         context?.drawImage(videoRef.current!, 0, 0, canvas.width, canvas.height);
        //         let base64string = canvas.toDataURL();
        //         console.log(base64string);

        //         socket.emit("stream", base64string);
        //     };

        //     mediaRecorder.start();

        //     // const blob = new Blob(chunks, { type: "video/webm" });
        //     // socket.emit("stream", { data: blob });

        //     // setInterval(async () => {
        //     //     mediaRecorder.stop();
        //     //     const blob = new Blob(chunks, { type: "video/webm" });
        //     //     console.log(blob);
        //     //     socket.emit("stream", { data: blob });
        //     //     // const response = await fetch(streamUrl, {
        //     //     //     method: "POST",
        //     //     //     body: blob,
        //     //     // });
        //     //     // console.log(response.status);
        //     //     chunks = [];
        //     //     mediaRecorder.start();
        //     // }, 9000);
        // };

        const handleSuccess = async (stream: MediaStream) => {
            if (videoRef.current) {
                videoRef.current.srcObject = stream;

                videoRef.current.onloadedmetadata = function () {
                    let canvas = document.createElement("canvas");
                    canvas.width = videoRef.current!.videoWidth;
                    canvas.height = videoRef.current!.videoHeight;

                    let context = canvas.getContext("2d");

                    //setInterval(() => {
                    context?.drawImage(videoRef.current!, 0, 0, canvas.width, canvas.height);
                    let base64string = canvas.toDataURL();
                    console.log(base64string);
                    socket.emit("stream", base64string);
                    //}, 50);
                };
            }

            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
        };

        const handleError = (error: any) => {
            console.error("Error accessing webcam:", error);
        };

        navigator.mediaDevices.getUserMedia({ video: true }).then(handleSuccess).catch(handleError);
    }, []);

    return <video ref={videoRef} autoPlay={true} className="fixed rounded-2xl right-5 bottom-5 -scale-x-100" height={100} width={200} />;
}
