import React,{useEffect,useState} from 'react';
import '../App.css';
import RecipeReviewCard from './CategorieContents';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    grow: {
    flexGrow: 1,
  },
   search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
function Categories() {

  const APP_ID = "f5e57e8e";
  const APP_KEY = "4d4cd7d271f97729f9ce87c2fe8b45a0";
  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');
  useEffect(()=>{
      getRecipe();
  },[query]);

  const getRecipe = async()=>{
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  }
 
  const updateSearch = e =>{
    setSearch(e.target.value);
    // console.log(search); 
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

    const classes = useStyles();

    return(
        <div>    
            <div className="searchForCategorie">
                <h3 style={{ marginLeft:'15px' }}>Categories</h3>
                <div className={classes.search} style={{ paddig:'8px 8px 8px 8px',margin:'10px' }}>
          <div className='search' >
          
            <form onSubmit={getSearch} className="search-form">
              <input
                className="search-bar"
                type="text"
                value = {search}
                onChange={updateSearch}
              />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </div>
          </div>
            </div>
                
            <div className="recipes">
                {recipes.map(recipe => (
                    <RecipeReviewCard
                      key={recipe.recipe.label}
                      title={recipe.recipe.label}
                      calories={recipe.recipe.calories}
                      image={recipe.recipe.image}
                      ingredients={recipe.recipe.ingredients}
                    />
                ))}
                
            </div>
        </div>
    );
}
export default Categories;