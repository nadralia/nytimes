import React from 'react';
import {Link} from 'react-router-dom'
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import App from './App';
import ArticleList from './components/List'
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';

// components
import About from './components/About'
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import NavigationMenu from './components/NavigationMenu';
import ArticleCard from './components/ArticleCard';

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders App component header without crashing", () => {
    const wrapper = shallow(<About />);
    const header = (<h1 className="font-bold text-2xl mb-3">About us</h1>);
    expect(wrapper.contains(header)).toEqual(true);
  });
  it("renders Header component without crashing", () => {
    shallow(<Header />);
  });
  it("renders Header component header without crashing", () => {
    const wrapper = shallow(<Header />);
    const header = (<Link to="/" className="font-bold">NY Times Most Popular</Link>);
    expect(wrapper.contains(header)).toEqual(true);
  });

  it("renders Footer component without crashing", () => {
    shallow(<Footer />);
  });
  it("renders Footer component header without crashing", () => {
    const wrapper = shallow(<Footer />);
    const header = (<footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t">&copy; Copyright 2021</footer>);
    expect(wrapper.contains(header)).toEqual(true);
  });
  // it("renders Article component without crashing", () => {
  //   shallow(<Article />);
  // });
});

describe("snapshots", () => {
  it("App snapshot", () => {
    const app = shallow(<App/>);
    expect(toJson(app)).toMatchSnapshot();
  });
  it("Header snapshots", () => {
    const header = shallow(<Header/>);
    expect(toJson(header)).toMatchSnapshot();
  });
  it("Footer snapshot", () => {
    const footer = shallow(<Footer />);
    expect(toJson(footer)).toMatchSnapshot();
  });

  // it("Article snapshot", () => {
  //   const article = shallow(<Article />);
  //   expect(toJson(article)).toMatchSnapshot();
  // });

  it("List articles snapshot", () => {
    const listArticles = shallow(<ArticleList />);
    expect(toJson(listArticles)).toMatchSnapshot();
  });

  it("Loader snapshot", () => {
    const loader = shallow(<Loader />);
    expect(toJson(loader)).toMatchSnapshot();
  });

  it("Navigation snapshot", () => {
    const navigation = shallow(<Navigation />);
    expect(toJson(navigation)).toMatchSnapshot();
  });

  it("Navigation Menu snapshot", () => {
    const navigationMenu = shallow(<NavigationMenu />);
    expect(toJson(navigationMenu)).toMatchSnapshot();
  });

  it("Article Card snapshot", () => {
    const articleCard = shallow(<ArticleCard />);
    expect(toJson(articleCard)).toMatchSnapshot();
  });

  
});
