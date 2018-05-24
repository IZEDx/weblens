import '@stencil/core';
import { Component, Event, EventEmitter } from '@stencil/core';

function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

@Component({
	tag: 'wl-camera',
	styleUrl: 'wl-camera.scss'
})
export class Camera {

    @Event() onCameraUnavailable: EventEmitter<Error>;
    private videoElement: HTMLVideoElement;

	async componentDidLoad() {
        if (!hasGetUserMedia()) {
            this.onCameraUnavailable.emit(new Error("Not supported."));
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: true});
            this.videoElement.srcObject = stream;
        } catch(err) {
            this.onCameraUnavailable.emit(err);
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
