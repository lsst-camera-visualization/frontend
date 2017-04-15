import * as BoxActions from "../actions/box.actions";

import store from "../store";

export const createBox = params => {
    store.dispatch(BoxActions.createBox(params["box_id"]));
}

export const deleteBox = params => {
    store.dispatch(BoxActions.deleteBox(params["box_id"]));
}

export const clearBoxText = params => {
    store.dispatch(BoxActions.clearBoxText(params["box_id"]));
}