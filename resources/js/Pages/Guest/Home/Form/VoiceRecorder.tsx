import { Toggle } from "@/Components/ui/toggle";
import { Mic } from "lucide-react";
import { useState } from "react";

export default function VoiceRecorder ({
    onAudioReady,
}: {
    onAudioReady: (audio: Blob) => void;
}) {
    const [isRecording, setIsRecording] = useState(false);
    const [audioURL, setAudioURL] = useState<string | null>(null);
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
        null
    );

    const startRecording = async () => {
        setAudioURL(null);

        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
        });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.start();
        setIsRecording(true);

        const audioChunks: Blob[] = [];
        recorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        recorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
            onAudioReady(audioBlob);

            const reader = new FileReader();
            reader.onloadend = () => {
                setAudioURL(reader.result as string); // Hasilkan Data URL
            };
            reader.readAsDataURL(audioBlob);
        };
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
        }
        setIsRecording(false);
    };

    return (
        <>
            <div className="md:flex items-center space-x-3 md:space-y-0 space-y-3">
                <Toggle
                    onClick={isRecording ? stopRecording : startRecording}
                    className="bg-gray-100 data-[state=on]:bg-red-500 data-[state=on]:text-white"
                >
                    <Mic />
                    {isRecording ? "Sedang merekam" : "Mulai merekam"}
                </Toggle>

                {audioURL && <CustomAudioPlayer audioURL={audioURL} />}
            </div>
        </>
    );
};

const CustomAudioPlayer = ({ audioURL }: { audioURL: string }) => {
    return (
        <div className="audio-player-container">
            <div className="audio-player-wrapper">
                <audio
                    controls
                    className="audio-player"
                    // onPlay={() => console.log("Audio started playing")}
                >
                    <source src={audioURL} type="audio/mp3" />
                    <source src={audioURL} type="audio/webm" />
                    <source src={audioURL} type="audio/wav" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};
