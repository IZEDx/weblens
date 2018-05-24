import { Component, Event, EventEmitter } from "@stencil/core";

function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

@Component({
	tag: "wl-camera",
	styleUrl: "wl-camera.scss"
})
export class Camera {

    @Event() cameraUnavailable: EventEmitter<Error>;
    @Event() cameraAvailable: EventEmitter<MediaStream>;
    private videoElement: HTMLVideoElement;

	async componentDidLoad() {
        if (!hasGetUserMedia()) {
            this.cameraUnavailable.emit(new Error("Not supported."));
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } } });
            this.videoElement.srcObject = stream;
            this.cameraAvailable.emit(stream);
        } catch(err) {
            this.cameraUnavailable.emit(err);
        }
	}

	render() {
		return (
            <section>
                <video ref={el => this.videoElement = el as HTMLVideoElement} autoplay></video>
            </section>
        );
	}
}
