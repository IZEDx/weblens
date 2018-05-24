import '@stencil/core';
import { Component, Listen } from '@stencil/core';


@Component({
	tag: 'wl-app',
	styleUrl: 'wl-app.scss'
})
export class App {

	componentDidLoad() {
	}

    
    @Listen("cameraUnavailable")
    handleCameraUnavailable(err: Error) {
        console.error(err);
    }


	render() {
		return (
            <main>
                <wl-camera />
            </main>
        );
	}
}
