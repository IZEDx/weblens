/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  EventEmitter,
} from '@stencil/core';

declare global {

  namespace StencilComponents {
    interface WlApp {

    }
  }

  interface HTMLWlAppElement extends StencilComponents.WlApp, HTMLStencilElement {}

  var HTMLWlAppElement: {
    prototype: HTMLWlAppElement;
    new (): HTMLWlAppElement;
  };
  interface HTMLElementTagNameMap {
    'wl-app': HTMLWlAppElement;
  }
  interface ElementTagNameMap {
    'wl-app': HTMLWlAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wl-app': JSXElements.WlAppAttributes;
    }
  }
  namespace JSXElements {
    export interface WlAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface WlCamera {

    }
  }

  interface HTMLWlCameraElement extends StencilComponents.WlCamera, HTMLStencilElement {}

  var HTMLWlCameraElement: {
    prototype: HTMLWlCameraElement;
    new (): HTMLWlCameraElement;
  };
  interface HTMLElementTagNameMap {
    'wl-camera': HTMLWlCameraElement;
  }
  interface ElementTagNameMap {
    'wl-camera': HTMLWlCameraElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wl-camera': JSXElements.WlCameraAttributes;
    }
  }
  namespace JSXElements {
    export interface WlCameraAttributes extends HTMLAttributes {
      'onCameraUnavailable'?: (event: CustomEvent<Error>) => void;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
