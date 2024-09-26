import DEFAULT_VALUES from '/imports/ui/components/layout/defaultValues';

export const INITIAL_INPUT_STATE = {
  autoarrAngeLayout: true,
  customParameters: {

  },
  browser: {
    width: window.document.documentElement.clientWidth,
    height: window.document.documentElement.clientHeight,
  },
  bannerBar: {
    hasBanner: false,
  },
  notificationsBar: {
    hasNotification: false,
  },
  navBar: {
    hasNavBar: true,
    height: DEFAULT_VALUES.navBarHeight,
  },
  actionBar: {
    hasActionBar: true,
    height: DEFAULT_VALUES.actionBarHeight,
  },
  sidebarNavigation: {
    isOpen: false,
    width: 0,
    height: 0,
    browserWidth: 0,
    sidebarNavPanel: DEFAULT_VALUES.sidebarNavPanel,
  },
  sidebarContent: {
    isOpen: false,
    currentPanelType: DEFAULT_VALUES.panelType,
    width: 0,
    height: 0,
    browserWidth: 0,
    sidebarContentPanel: DEFAULT_VALUES.sidebarContentPanel,
    resizableEdge: {
      top: false,
      right: false,
      bottom: false,
      left: false,
    },
  },
  sidebarContentHorizontalResizer: {
    isOpen: true,
    currentPanelType: DEFAULT_VALUES.panelType,
    width: 0,
    height: 0,
    browserWidth: 0,
  },
  cameraDock: {
    numCameras: 0,
    position: DEFAULT_VALUES.cameraPosition,
    width: 0,
    height: 0,
    browserWidth: 0,
    browserHeight: 0,
    isDragging: false,
    isResizing: false,
    cameraOptimalGridSize: {
      width: 0,
      height: 0,
    },
    focusedId: 'none',
  },
  presentation: {
    isOpen: true,
    slidesLength: 0,
    currentSlide: {
      num: 0,
      size: {
        width: 0,
        height: 0,
      },
    },
    width: 0,
    height: 0,
    browserWidth: 0,
    browserHeight: 0,
  },
  screenShare: {
    hasScreenShare: false,
    width: 0,
    height: 0,
    browserWidth: 0,
    browserHeight: 0,
  },
  externalVideo: {
    hasExternalVideo: false,
    width: 0,
    height: 0,
    browserWidth: 0,
    browserHeight: 0,
  },
  sharedNotes: {
    isPinned: false,
    width: 0,
    height: 0,
    browserWidth: 0,
    browserHeight: 0,
  },
};

export const INITIAL_OUTPUT_STATE = {
  navBar: {
    display: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    tabOrder: 0,
    zIndex: 1,
  },
  actionBar: {
    display: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    tabOrder: 0,
    zIndex: 1,
  },
  captions: {
    left: 0,
    right: 0,
  },
  sidebarNavigation: {
    display: true,
    minWidth: 0,
    width: 0,
    maxWidth: 0,
    minHeight: 0,
    height: 0,
    maxHeight: 0,
    top: 0,
    left: 0,
    tabOrder: 0,
    isResizable: false,
    resizableEdge: {
      top: false,
      right: false,
      bottom: false,
      left: false,
    },
    zIndex: 1,
  },
  sidebarContent: {
    display: true,
    minWidth: 0,
    width: 0,
    maxWidth: 0,
    minHeight: 0,
    height: 0,
    maxHeight: 0,
    top: 0,
    left: 0,
    currentPanelType: '',
    tabOrder: 0,
    isResizable: false,
    resizableEdge: {
      top: false,
      right: false,
      bottom: false,
      left: false,
    },
    zIndex: 1,
  },
  mediaArea: {
    width: 0,
    height: 0,
  },
  cameraDock: {
    display: false,
    position: null,
    minWidth: 0,
    width: 0,
    maxWidth: 0,
    minHeight: 0,
    height: 0,
    maxHeight: 0,
    top: 0,
    left: 0,
    tabOrder: 0,
    isDraggable: false,
    isResizable: false,
    resizableEdge: {
      top: false,
      right: false,
      bottom: false,
      left: false,
    },
    zIndex: 1,
    focusedId: 'none',
  },
  dropZoneAreas: {},
  presentation: {
    display: true,
    minWidth: 0,
    width: 0,
    maxWidth: 0,
    minHeight: 0,
    height: 0,
    maxHeight: 0,
    top: 0,
    left: 0,
    tabOrder: 0,
    isResizable: false,
    resizableEdge: {
      top: false,
      right: false,
      bottom: false,
      left: false,
    },
    presentationOrientation: 'horizontal',
    zIndex: 1,
  },
  screenShare: {
    display: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    zIndex: 1,
  },
  externalVideo: {
    display: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    tabOrder: 0,
    zIndex: 1,
  },
  sharedNotes: {
    display: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    tabOrder: 0,
    zIndex: 1,
  },
};
