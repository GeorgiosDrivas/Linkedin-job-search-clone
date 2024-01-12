import './App.css'
import { List } from './components/List';
import { Filters } from './components/Filters';
import { Single } from './components/Single';
import Grid from '@mui/material/Grid';

function App() {

  return (
    <>
      <Grid container textAlign={"center"}> {/* Main Container */}
        <Grid item xs={12}>{/* Filters Column */}
          <Filters />
        </Grid>
        <Grid item xs={4} sx={{ borderRight: 1 }}>{/* List Column */}
          <List />
        </Grid>
        <Grid item xs={8}>{/* Single Job Column */}
          <Single />
        </Grid>
      </Grid>
    </>
  )
}

export default App
