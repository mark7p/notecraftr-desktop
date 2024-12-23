import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { WindowState } from "./window.reducer";

export const selectWindow = (state: AppState) => {
  return state.window;
};

export const maximized = createSelector(
  selectWindow,
  (state: WindowState) => state.maximized
);

export const theme = createSelector(
  selectWindow,
  (state: WindowState) => state.theme
);

export const activeUrl = createSelector(
  selectWindow,
  (state: WindowState) => state.activeUrl
);

export const addonsEnabled = createSelector(
  selectWindow,
  (state: WindowState) => state.addonsEnabled
);

export const autoCopyOnTemplateChange = createSelector(
    selectWindow,
    (state: WindowState) => state.autoCopyOnTemplateChange
)

export const autoCopyOnOutputChange = createSelector(
    selectWindow,
    (state: WindowState) => state.autoCopyOnOutputChange
)

export const linkedSectionsEnabled = createSelector(
    selectWindow,
    (state: WindowState) => state.linkedSectionsEnabled
)

export const message = createSelector(
    selectWindow,
    (state: WindowState) => state.message
)

export const blurred = createSelector(
    selectWindow,
    (state: WindowState) => state.blurred
)

export const size = createSelector(
    selectWindow,
    (state: WindowState) => state.size
)

export const position = createSelector(
    selectWindow,
    (state: WindowState) => state.position
)

export const notePreviewWindowMode = createSelector(
  activeUrl,
  (activeUrl) => {
    return /note-window/g.test(activeUrl);
  }
)
