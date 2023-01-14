import React, { useRef, useEffect } from "react";

interface Props {
    streamUrl: string;
}

export default function Webcam() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const handleSuccess = async (stream: MediaStream) => {
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }

            const mediaRecorder = new MediaRecorder(stream);
            let chunks: Blob[] = [];
            mediaRecorder.ondataavailable = (event: any) => {
                chunks.push(event.data);
            };
            mediaRecorder.start();

            setInterval(async () => {
                mediaRecorder.stop();
                const blob = new Blob(chunks, { type: "video/webm" });
                console.log(blob);
                // const response = await fetch(streamUrl, {
                //     method: "POST",
                //     body: blob,
                // });
                // console.log(response.status);
                chunks = [];
                mediaRecorder.start();
            }, 1000);
        };

        const handleError = (error: any) => {
            console.error("Error accessing webcam:", error);
        };

        navigator.mediaDevices.getUserMedia({ video: true }).then(handleSuccess).catch(handleError);
    }, []);

    return <video ref={videoRef} autoPlay={true} className="fixed rounded-2xl right-5 bottom-5 -scale-x-100" height={300} width={200} />;
}
