import React from 'react'
// material ui
import { makeStyles } from '@material-ui/core/styles'
// components
import Layout from '../components/Templates/MainLayout'

const useStyles = makeStyles((theme: any) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  mainFeaturedPost: {
    height: '100vh',
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}))

const HomePage = () => {
  const classes = useStyles()

  return (
    <Layout title="HOME | RAVER APP">
      <div className={classes.mainFeaturedPost}>Buan loca</div>
    </Layout>
  )
}

export default HomePage
