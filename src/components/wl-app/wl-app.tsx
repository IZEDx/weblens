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


	render() {
		return (
            <main>
                <wl-camera />
                <aside class="status">{this.status}</aside>
            </main>
        );
	}
}
