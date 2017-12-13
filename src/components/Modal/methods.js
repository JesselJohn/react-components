import React from 'react';
import Modal from './';

function getModalTemplateIfOpen() {
  const {
    className,
    children,
    ...otherProps
  } = this.props;

  if (this.state.isOpen) {
    return (
      <div
        role="button"
        className={`nwc-modal-container ${className}`}
        tabIndex={0}
        onClick={this.closeModal}
        // onKeyDownCapture={(e) => { this.closeModal(e, 'key'); }}
        onKeyDown={(e) => { this.closeModal(e, 'key'); }}
        ref={(c) => { this.modalRef = c; }}
        {...otherProps}
      >
        <div
          role="button"
          className="nwc-modal"
          tabIndex={0}
          onClick={Modal.preventEventPropagation}
          onKeyDown={null}
        >
          <button
            onClick={this.closeModal}
            className="nwc-modal-close"
          >
            ×
          </button>
          {children}
        </div>
      </div>
    );
  }
  return null;
}

function openModal() {
  Modal.fixScrollFn();
  this.setState({
    isOpen: true,
  });
  setTimeout(() => {
    this.modalRef.focus();
  }, 10);
}

function closeModal(e, eventType) {
  if (eventType === 'key' && e.key !== 'Escape') {
    return;
  }
  Modal.unFixScrollFn();
  this.setState({
    isOpen: false,
  });
}

export {
  getModalTemplateIfOpen,
  openModal,
  closeModal,
};
