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
	},
	4: {
		name: 'Kamera 4',
		image: 'https://unsplash.it/1024/720?image=4',
	},
	5: {
		name: 'Kamera 5',
		image: 'https://unsplash.it/1024/720?image=5',
	}
}

export default function cameras(state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
