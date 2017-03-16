const defaultState = {
	1: {
		name: 'Kamera 1',
		image: 'https://unsplash.it/1024/720?image=1',
	},
	2: {
		name: 'Kamera 2',
		image: 'https://unsplash.it/1024/720?image=2',
	},
	3: {
		name: 'Kamera 3',
		image: 'https://unsplash.it/1024/720?image=3',
	}
}

export default function cameras(state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
