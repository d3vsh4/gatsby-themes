/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Header = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    // <Box as="Header" variant="Header">
    //   Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    //   <br />
    // </Box>
    <header
      sx={{
        py: 4,
        variant: 'header',
      }}>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
        }}>
          <img
            alt='UI Logo'
            src='https://www.jagannathuniversity.org/assets/img/logo-primary.png'
          />
          <span
            sx={{
              position: 'absolute',
              width: 1,
              height: 1,
              overflow: 'hidden',
              top: -9999,
            }}>
            Home
      </span>
      </div>
    </header>
  )
}

export default Header
