export const SET_OPEN_MENU_DRAWER = 'SET_OPEN_MENU_DRAWER'
export const SET_MENU_TITLE       = 'SET_MENU_TITLE'

export function setOpenMenuDrawer(open) {
  return {
    type: SET_OPEN_MENU_DRAWER,
    payload: open,
  }
}

export function setMenuTitle(title) {
  return {
    type: SET_MENU_TITLE,
    payload: title,
  }
}
