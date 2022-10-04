interface IMenuOptionProps {
  icon: string;
  index: number;
  label: string;
  url: string;
  type: "quick" | "full";
}

const MenuOption: React.FC<IMenuOptionProps> = (props: IMenuOptionProps) => {
  const { toggled } = React.useContext(AppContext);
  
  const className: string = `menu-${props.type}-option`,
        delay: number = toggled ? 200 : 0;
  
  const styles: React.CSSProperties = {
    transitionDelay: `${delay + (50 * props.index)}ms`
  }
  
  return (
    <a href={props.url} target="_blank" className={className} disabled={!toggled} style={styles}>
      <i className={props.icon} />
      <h3 className={props.type === "quick" ? "tooltip" : "label"}>{props.label}</h3>
    </a>
  );
}

const Menu: React.FC = () => {
  const { toggled } = React.useContext(AppContext);
  
  const profileImage: string = "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  
  const getOptions = (options: IMenuOptionProps[], type: "quick" | "full"): JSX.Element[] => {
    return options.map((option: IMenuOptionProps, index: number) => (
      <MenuOption 
        key={option.label} 
        icon={option.icon} 
        index={index} 
        label={option.label}
        url={option.url}
        type={type} 
      />
    ));
  }
  
  const getQuickOptions = (): JSX.Element[] => {
    return getOptions([{
      icon: "fa-solid fa-bell", label: "Notifications", url: "https://codepen.io/Hyperplexed"
    }, {
      icon: "fa-solid fa-gear", label: "Settings", url: "https://codepen.io/Hyperplexed"
    }, {
      icon: "fa-solid fa-moon", label: "Theme", url: "https://codepen.io/Hyperplexed"
    }], "quick");
  }
  
  const getFullOptions = (): JSX.Element[] => {
    return getOptions([{
      icon: "fa-solid fa-house", label: "Home", url: "https://codepen.io/Hyperplexed"
    }, {
      icon: "fa-solid fa-user", label: "Profile", url: "https://codepen.io/Hyperplexed"
    }, {
      icon: "fa-solid fa-chart-line", label: "Dashboard", url: "https://codepen.io/Hyperplexed"
    }, {
      icon: "fa-solid fa-heart", label: "Subscriptions", url: "https://codepen.io/Hyperplexed"
    }, {
      icon: "fa-solid fa-wallet", label: "Wallet", url: "https://codepen.io/Hyperplexed"
    }], "full");
  }
  
  return (  
    <div id="menu" className={classNames({ toggled })}>
      <div id="menu-background-wrapper">
        <div id="menu-background" />
      </div>
      <img id="menu-profile-image" src={profileImage} />
      <div id="menu-quick-options">
        {getQuickOptions()}
      </div>
      <div id="menu-full-options">
        {getFullOptions()}
      </div>  
    </div>
  );
}

const AppContext = React.createContext(null);

const App: React.FC = () => {
  const [toggled, setToggledTo] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    setTimeout(() => setToggledTo(true), 1000);
  }, []);
  
  const handleOnClick = (): void => setToggledTo(!toggled);  
  
  return(
    <AppContext.Provider value={{ toggled }}>
      <div id="app">
        <Menu />
        <button id="menu-toggle" type="button" onClick={handleOnClick}>
          <i className={ toggled ? "fa-solid fa-xmark-large" : "fa-solid fa-bars-staggered" } />
        </button>
      </div>
    </AppContext.Provider>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));