import { ReactElement, useState, useEffect } from 'react'
import { StyledButton } from '@atoms/AddToFavoritesButton/AddToFavoritesButton.styled'
import { Heart as FullHeart } from '@styled-icons/fa-solid/Heart'
import { Heart as OutlineHeart } from '@styled-icons/fa-regular/Heart'

interface AddToFavoritesProps {
  className: string
  aria: string
  openInNewTab: string
  title: string
  slug: string
  featuredImage: string
}

export const AddToFavoritesButton = ({
  className,
  aria,
  openInNewTab,
  title,
  slug,
  featuredImage,
}: AddToFavoritesProps) => {
  // const [storageItem, setStorageItem] = useState([])
  // const [storageItems, setStorageItems] = useState([])

  // useEffect(() => {
  //   const getArray = JSON.parse(localStorage.getItem('favoritesList2'))
  //   if (getArray) {
  //     setStorageItem([...getArray])
  //   }
  // }, [])

  // // setStorageItem(
  //   typeof window !== 'undefined' &&
  //     JSON.parse(localStorage.getItem('favouritesList2')),
  // )
  // storageItem =
  //   typeof window !== 'undefined' &&
  //   JSON.parse(localStorage.getItem('favouritesList2'))
  // const [storageItem, setStorageItem] = useState(
  //   () =>
  //     typeof window !== 'undefined' &&
  //     JSON.parse(localStorage.getItem('favouritesList2')
  // , [])

  // console.log('lol', storageItem)

  // const isFavourited = true
  // storageItem && storageItem.filter((item) => item.slug === slug)
  // const isFavourited = true

  // const handleToggleFavourite = () => {
  // if (!isFavourited) {
  // const test = localStorage.getItem('favouritesList2')
  // setStorageItem(test)
  // let new = storageItem.push(slug)//÷
  // console.log('lol2', newStorageItem)
  // const test = [...storageItem, slug]
  // storageItems.push(test)
  // console.log(storageItems)
  // setStorageItem([...storageItem, slug])
  // localStorage.setItem('favouritesList2', JSON.stringify(storageItems))
  // } else {
  // const test = localStorage.getItem('favouritesList2')
  // setStorageItem(test)
  // const newStorageItem = storageItem.filter((savedId) => savedId !== slug)
  // setStorageItem(newStorageItem)
  // localStorage.setItem('favouritesList2', JSON.stringify(newStorageItem))
  // }
  // }

  // const [favorites, setFavorites] = useState([] as Array<AddToFavoritesProps[]>)  const getLocalStorage = JSON.parse(localStorage.getItem('favoritesList')
  // const getLocalStorage =
  //
  //   JSON.parse(localStorage.getItem('favoritesList'))

  // const [favorites, setFavorites] = useState([] as Array<object>)
  // let test
  // useEffect(() => {
  //   const getArray = JSON.parse(localStorage.getItem('favoritesList'))
  //   if (getArray) {
  //     setFavorites([...getArray])
  //   }
  // }, [])

  // console.log('test++++++++2', favorites)

  // const addToFavorites = (props) => {
  // const getArray = JSON.parse(localStorage.getItem('favoritesList'))
  // setFavorites([...getArray])
  // console.log('test', favorites)
  // test = JSON.parse(localStorage.getItem('favoritesList')) || []
  // const array = test

  //   test = JSON.parse(localStorage.getItem('favoritesList')) || []
  //   setFavorites([...test])
  //   const array = favorites
  //   let addArray = true

  //   array.map((item, key) => {
  //     addArray = true
  //     if (item.slug === props.slug) {
  //       array.splice(key, 1)
  //       addArray = false
  //     }
  //   })
  //   if (addArray === true) {
  //     array.push({ ...props })
  //   }
  //   setFavorites([...array])
  //   localStorage.getItem('favoritesList')

  //   localStorage.setItem('favoritesList', JSON.stringify(favorites))
  //   localStorage.getItem('favoritesList')

  //   const storage = localStorage.getItem('favoritesList')
  //   if (storage == null) {
  //     localStorage.setItem('favoritesList' + favorites, JSON.stringify(props))
  //   } else {
  //     if (storage.slug === props.slug) {
  //       localStorage.removeItem('favoritesList' + favorites)
  //     }
  //   }
  // }

  const [favorites, setFavorites] = useState([] as Array<object>)

  useEffect(() => {
    const getArray = JSON.parse(
      localStorage.getItem('favoritesListNew2') || '0',
    )
    console.log('getArray', getArray)

    if (getArray !== 0) {
      setFavorites([...getArray])
    }
  }, [])

  const addToFavorites = (props: any) => {
    const array = favorites
    let addArray = true
    array.map((item, key) => {
      console.log('item', props)
      if (item.title === props.title) {
        array.splice(key, 1)
        addArray = false
      }
    })
    if (addArray === true) {
      array.push({ ...props })
    }

    setFavorites([...array])
    localStorage.setItem('favoritesListNew2', JSON.stringify(favorites))
    const storage = localStorage.getItem('favoritesListNew2')
    if (storage == null) {
      localStorage.setItem(
        'favoritesListNew2' + favorites,
        JSON.stringify(props),
      )
    } else {
      if (storage.title === props.title) {
        localStorage.removeItem('favoritesListNew2' + favorites)
      }
    }
  }

  const removeItem = (props) => {
    let myFavorites = [...favorites]
    myFavorites = myFavorites.filter((item) => item.slug !== props.slug)
    setFavorites(myFavorites)
    localStorage.setItem('favoritesList', JSON.stringify(myFavorites))
  }
  // const getArray = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('favoritesList') || '0')

  // let favoriteItems
  // if (typeof window !== 'undefined') {
  //   favoriteItems = JSON.parse(localStorage.getItem('favoritesList'))
  // }
  // if (getArray !== 0) {
  // setFavorites([...favoriteItems])
  // }

  // const [newFavorites2, setNewFavorites] = useState([])

  // useEffect(() => {
  //   const getArray = JSON.parse(localStorage.getItem('newFavorites') || '0')

  //   if (getArray !== 0) {
  //     setNewFavorites([...getArray])
  //   }
  // }, [])

  // const addToFavoritesNew = (props) => {
  //   const myFavorites = newFavorites2 ? [...newFavorites2] : []
  //   console.log(newFavorites2)

  //   const index = myFavorites.findIndex((item) => item.slug === props.slug)
  //   console.log(index)

  //   // const getArray = JSON.parse(localStorage.getItem('newFavorites') || '0')

  //   // if (getArray !== 0) {
  //   //   setNewFavorites([...getArray])
  //   // }

  //   // myFavorites.map((item, key) => {
  //   if (index === -1) {
  //     // const actualLocalStorage = localStorage.getItem('newFavorites')
  //     // myFavorites.push(JSON.stringify(actualLocalStorage))
  //     // myFavorites.push(props)
  //     // console.log('dupa', myFavorites)
  //     // setNewFavorites(myFavorites)
  //     setNewFavorites((myFavorites) => [...myFavorites, props])
  //     localStorage.setItem('newFavorites2', JSON.stringify(newFavorites2))
  //   } else {
  //     console.log('juz dodany')
  //   }
  //   // })
  // }

  return (
    <StyledButton
      className={className}
      target={openInNewTab ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={favorites.some((item) => item.title === title) ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
      onClick={() => addToFavorites({ title, slug, featuredImage })}
    >
      {favorites.some((item) => item.title === title) ? (
        // <StyledButton aria-label="Usuń z ulubionych">
        <FullHeart onClick={() => removeItem(slug)} />
      ) : (
        // </StyledButton>
        // <StyledButton aria-label="Dodaj do ulubionych">
        <OutlineHeart />
        // </StyledButton>
      )}
    </StyledButton>
  )
}

// export const AddToFavoritesButton = (): ReactElement => {
//   const [isFavorites, setIsFavorites] = useState<boolean>(false)

// const [favorite, setFavorite] = useState([]) // <= this state holds the id's of all favorite reciepies
// const [favorites, setFavorites] = useState([] as Array<number>)
// // following function handles the operation of adding fav recipes's id's

// // const addToFavorite = (title) => {
// //   if (!favorite.includes(title)) setFavorite(favorite.push(title))
// //   // sessionStorage.setItem('favorites', JSON.stringify(favorite))
// //   console.log(favorite)
// //   // setIsFavorites(!isFavorites)
// // }

// const addToFavorites = (props: AddToFavoritesProps) => {
//   let array = favorites
//   let addArray = true
//   array.map((item, key) => {
//     if (item === props) {
//       array.splice(key, 1)
//       addArray = false
//     }
//   })
//   if (addArray) {
//     array.push(`${props.title}, ${props.image}, ${props.link}`)
//   }
//   setFavorites([...array])
//   localStorage.setItem("favoritesList", JSON.stringify(favorites))

//   console.log(array)
// const storage = localStorage.getItem('favoritesList')
// if (storage == null) {
//   localStorage.setItem(('favoritesList' + (props.title)), JSON.stringify(props.title))
// } else {
//   localStorage.removeItem('favoritesList' + (props.title))
// }

// this one does the exact opposite, it removes the favorite recipe id's
// const removeFavorite = title => {
//   let index = favorite.indexOf(title)
//   console.log(index)
//   let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)]
//   setFavorite(temp)
//   setIsFavorites(!isFavorites)
// }

// useEffect(() => {
//   isFavorites && favorites.push({ title: title, link: link, image: image })
//   sessionStorage.setItem('favorites', favorites)

//   // !isFavorites && sessionStorage.removeItem('favorites', [`${title}, ${link}, ${image}`])
// }, [isFavorites])

//   return (
//     <>
//       {!isFavorites ? (
//         <StyledButton aria-label="Usuń z ulubionych">
//           <OutlineHeart />
//         </StyledButton>
//       ) : (
//         <StyledButton aria-label="Dodaj do ulubionych">
//           <FullHeart />
//         </StyledButton>
//       )}
//     </>
//   )
// }
