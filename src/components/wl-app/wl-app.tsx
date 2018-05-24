import { Component, Listen, State } from "@stencil/core";


@Component({
	tag: "wl-app",
	styleUrl: "wl-app.scss"
})
export class App {

    @State() status = "Initializing...";

	componentDidLoad() {
	}

    
    @Listen("cameraUnavailable")
    handleCameraUnavailable(err: CustomEvent) {
        this.status = err.detail.toString();
    }

    @Listen("cameraAvailable")
    handleCameraAvailable(stream: MediaStream) {
        this.status = "Camera found";
        console.log(stream);
    }

	render() {
		return (
            <main>
                <wl-camera />
                <aside class="status">{this.status}</aside>
            </main>
        );
	}
}
