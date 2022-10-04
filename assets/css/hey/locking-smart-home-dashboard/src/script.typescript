enum UserStatus {  
  LoggedIn = "Logged In",
  LoggingIn = "Logging In",
  LoggedOut = "Logged Out",
  LogInError = "Log In Error",
  VerifyingLogIn = "Verifying Log In"
}

enum Default {
  PIN = "1234"
}

enum WeatherType {
  Cloudy = "Cloudy",
  Rainy = "Rainy",
  Stormy = "Stormy",
  Sunny = "Sunny"
}

interface IPosition {
  left: number;
  x: number;
}

const defaultPosition = (): IPosition => ({
  left: 0,
  x: 0
});

interface INumberUtility {
  clamp: (min: number, value: number, max: number) => number;
  rand: (min: number, max: number) => number;
}

const N: INumberUtility = {
  clamp: (min: number, value: number, max: number) => Math.min(Math.max(min, value), max),
  rand: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
}

interface ITimeUtility {
  format: (date: Date) => string;
  formatHours: (hours: number) => string;
  formatSegment: (segment: number) => string;
}

const T: ITimeUtility = {
  format: (date: Date): string => {
    const hours: string = T.formatHours(date.getHours()),
          minutes: string = date.getMinutes(),
          seconds: string = date.getSeconds();
    
    return `${hours}:${T.formatSegment(minutes)}`;
  },
  formatHours: (hours: number): string => {
    return hours % 12 === 0 ? 12 : hours % 12;
  },
  formatSegment: (segment: number): string => {
    return segment < 10 ? `0${segment}` : segment;
  }
}

interface ILogInUtility {
  verify: (pin: string) => Promise<boolean>;
}

const LogInUtility: ILogInUtility = {
  verify: async (pin: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(pin === Default.PIN) {
          resolve(true);
        } else {
          reject(`Invalid pin: ${pin}`);
        }
      }, N.rand(300, 700));
    });
  }
}

const useCurrentDateEffect = (): Date => {
  const [date, setDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      const update: Date = new Date();

      if(update.getSeconds() !== date.getSeconds()) {
        setDate(update);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [date]);
  
  return date;
}

interface IScrollableComponentState {
  grabbing: boolean;
  position: IPosition;
}

interface IScrollableComponentProps {
  children: any;
  className?: string;
  id?: string;
}

const ScrollableComponent: React.FC<IScrollableComponentProps> = (props: IScrollableComponentProps) => {
  const ref: React.MutableRefObject<HTMLDivElement> = React.useRef<HTMLDivElement>(null);
  
  const [state, setStateTo] = React.useState<IScrollableComponentState>({
    grabbing: false,
    position: defaultPosition()
  });
  
  const handleOnMouseDown = (e: any): void => {
    setStateTo({
      ...state,
      grabbing: true,
      position: {
        x: e.clientX,
        left: ref.current.scrollLeft
      }
    });
  }
  
  const handleOnMouseMove = (e: any): void => {
    if(state.grabbing) {
      const left: number = Math.max(0, state.position.left + (state.position.x - e.clientX));
      
      ref.current.scrollLeft = left;
    }
  }
  
  const handleOnMouseUp = (): void => {
    if(state.grabbing) {
      setStateTo({ ...state, grabbing: false });
    }
  }
  
  return (
    <div 
      ref={ref} 
      className={classNames("scrollable-component", props.className)}
      id={props.id}
      onMouseDown={handleOnMouseDown}
      onMouseMove={handleOnMouseMove}
      onMouseUp={handleOnMouseUp}
      onMouseLeave={handleOnMouseUp}
    >
      {props.children}
    </div>
  );
}

const WeatherSnap: React.FC = () => {  
  const [temperature] = React.useState<number>(N.rand(65, 85));
  
  return(
    <span className="weather">
      <i className="weather-type" className="fa-duotone fa-sun" />
      <span className="weather-temperature-value">{temperature}</span>
      <span className="weather-temperature-unit">°F</span>
    </span>
  )
}

const Reminder: React.FC = () => {
  return(
    <div className="reminder">
      <span className="reminder-text">Welcome to your smart home</span>      
    </div>
  )
}

const Time: React.FC = () => {
  const date: Date = useCurrentDateEffect();
  
  return(
    <span className="time">{T.format(date)}</span>
  )
}

interface IInfoProps {
  id?: string;
}

const Info: React.FC = (props: IInfoProps) => {  
  return(
    <div id={props.id} className="info">
      <Time />
      <WeatherSnap />
    </div>
  )
}

interface IPinDigitProps {
  focused: boolean;
  value: string;
}

const PinDigit: React.FC<IPinDigitProps> = (props: IPinDigitProps) => {
  const [hidden, setHiddenTo] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    if(props.value) {
      const timeout: NodeJS.Interval = setTimeout(() => {
        setHiddenTo(true);
      }, 500);

      return () => {
        setHiddenTo(false);
        
        clearTimeout(timeout);
      }
    }
  }, [props.value]);
  
  return (
    <div className={classNames("app-pin-digit", { focused: props.focused, hidden })}>
      <span className="app-pin-digit-value">{props.value || ""}</span>
    </div>
  ) 
}

const Pin: React.FC = () => {
  const { userStatus, setUserStatusTo } = React.useContext(AppContext);
  
  const [pin, setPinTo] = React.useState<string>("");
  
  const ref: React.MutableRefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);
  
  React.useEffect(() => {
    if(userStatus === UserStatus.LoggingIn || userStatus === UserStatus.LogInError) {
      ref.current.focus();
    } else {
      setPinTo("");
    }
  }, [userStatus]);
  
  React.useEffect(() => {
    if(pin.length === 4) {
      const verify = async (): Promise<void> => {
        try {
          setUserStatusTo(UserStatus.VerifyingLogIn);
          
          if(await LogInUtility.verify(pin)) {          
            setUserStatusTo(UserStatus.LoggedIn);
          }
        } catch (err) {
          console.error(err);
          
          setUserStatusTo(UserStatus.LogInError);
        }
      }
      
      verify();
    }
    
    if(userStatus === UserStatus.LogInError) {
      setUserStatusTo(UserStatus.LoggingIn);
    }
  }, [pin]);
  
  const handleOnClick = (): void => {
    ref.current.focus();
  }
  
  const handleOnCancel = (): void => {
    setUserStatusTo(UserStatus.LoggedOut);
  }
  
  const handleOnChange = (e: any): void => {
    if(e.target.value.length <= 4) {
      setPinTo(e.target.value.toString());
    }
  }
  
  const getCancelText = (): JSX.Element => {
    return (
      <span id="app-pin-cancel-text" onClick={handleOnCancel}>Cancel</span>
    )
  }
  
  const getErrorText = (): JSX.Element => {
    if(userStatus === UserStatus.LogInError) {
      return (
        <span id="app-pin-error-text">Invalid</span>
      )
    }
  }
  
  return(
    <div id="app-pin-wrapper">
      <input 
        disabled={userStatus !== UserStatus.LoggingIn && userStatus !== UserStatus.LogInError}
        id="app-pin-hidden-input" 
        maxLength={4} 
        ref={ref}
        type="number" 
        value={pin} 
        onChange={handleOnChange} 
      />
      <div id="app-pin" onClick={handleOnClick}>
        <PinDigit focused={pin.length === 0} value={pin[0]} />
        <PinDigit focused={pin.length === 1} value={pin[1]} />
        <PinDigit focused={pin.length === 2} value={pin[2]} />
        <PinDigit focused={pin.length === 3} value={pin[3]} />
      </div>
      <h3 id="app-pin-label">Enter PIN (1234) {getErrorText()} {getCancelText()}</h3>
    </div>
  )
}

interface IMenuSectionProps {
  children: any;
  icon: string;
  id: string;
  scrollable?: boolean;
  title: string;
}

const MenuSection: React.FC<IMenuSectionProps> = (props: IMenuSectionProps) => {
  const getContent = (): JSX.Element => {
    if(props.scrollable) {
      return (
        <ScrollableComponent className="menu-section-content">
          {props.children}
        </ScrollableComponent>
      );
    }
  
    return (    
      <div className="menu-section-content">
        {props.children}  
      </div>
    );
  }
  
  return (
    <div id={props.id} className="menu-section">
      <div className="menu-section-title">
        <i className={props.icon} />
        <span className="menu-section-title-text">{props.title}</span>
      </div>
      {getContent()}
    </div>
  )
}

const QuickNav: React.FC = () => {  
  const getItems = (): JSX.Element[] => {
    return [{
      id: 1,
      label: "Energy Production"
    }, {
      id: 2,
      label: "Thermostat"
    }, {
      id: 3,
      label: "All-Lights"
    }, {
      id: 4,
      label: "Goodnight"
    }].map((item: any) => {
      return (
        <div key={item.id} className="quick-nav-item clear-button">
          <span className="quick-nav-item-label">{item.label}</span>
        </div>
      );
    })
  }

  return (
    <ScrollableComponent id="quick-nav">
      {getItems()}    
    </ScrollableComponent>
  );
}

const Weather: React.FC = () => { 
  const getDays = (): JSX.Element[] => {
    return [{
      id: 1,
      name: "Mon",
      temperature: N.rand(60, 80),
      weather: WeatherType.Sunny
    }, {
      id: 2,
      name: "Tues",
      temperature: N.rand(60, 80),
      weather: WeatherType.Sunny
    }, {
      id: 3,
      name: "Wed",
      temperature: N.rand(60, 80),
      weather: WeatherType.Cloudy
    }, {
      id: 4,
      name: "Thurs",
      temperature: N.rand(60, 80),
      weather: WeatherType.Rainy
    }, {
      id: 5,
      name: "Fri",
      temperature: N.rand(60, 80),
      weather: WeatherType.Stormy
    }, {
      id: 6,
      name: "Sat",
      temperature: N.rand(60, 80),
      weather: WeatherType.Sunny
    }, {
      id: 7,
      name: "Sun",
      temperature: N.rand(60, 80),
      weather: WeatherType.Cloudy
    }].map((day: any) => {
      const getIcon = (): string => {
        switch(day.weather) {
          case WeatherType.Cloudy:
            return "fa-duotone fa-clouds";
          case WeatherType.Rainy:
            return "fa-duotone fa-cloud-drizzle";
          case WeatherType.Stormy:
            return "fa-duotone fa-cloud-bolt";
          case WeatherType.Sunny:
            return "fa-duotone fa-sun";
        }
      }
      
      return (
        <div key={day.id} className="day-card">
          <div className="day-card-content">
            <span className="day-weather-temperature">{day.temperature}<span className="day-weather-temperature-unit">°F</span></span>
            <i className={classNames("day-weather-icon", getIcon(), day.weather.toLowerCase())} />
            <span className="day-name">{day.name}</span>  
          </div>  
        </div>
      );
    });
  }
  return(
    <MenuSection icon="fa-solid fa-sun" id="weather-section" scrollable title="How's it look out there?">
      {getDays()}
    </MenuSection>
  )
}

const Tools: React.FC = () => {  
  const getTools = (): JSX.Element[] => {
    return [{
      icon: "fa-solid fa-air-conditioner",
      id: 1,
      image: "https://scottbrothersnc.com/wp-content/uploads/AC_A_002-ductless-AC-1.jpg",
      label: "Connected",
      name: "Air Conditioner"
    }, {
      icon: "fa-solid fa-vent-damper",
      id: 2,
      image: "https://blog-123-bucket.s3.amazonaws.com/wp-content/uploads/2020/11/27043913/123design.CleanTech_UVC_air_purifier_hero_01-1024x683.jpg",
      label: "Air Purifier",
      name: "Connected"
    }, {
      icon: "fa-solid fa-tv",
      id: 3,
      image: "https://i.pinimg.com/originals/2f/e1/35/2fe1356ea7e1949bb827bc2ef4394c99.jpg",
      label: "Control",
      name: "Apple TV"
    }, {
      icon: "fa-solid fa-battery-bolt",
      id: 4,
      image: "https://cdn.dribbble.com/users/937241/screenshots/3739479/power_3.jpg?compress=1&resize=800x600&vertical=top",
      label: "Utilities",
      name: "Energy Usage"
    }, {
      icon: "fa-solid fa-router",
      id: 5,
      image: "https://www.netgear.com/ie/media/WiFi_page_thin_banner_mobile_tcm161-129895.jpg",
      label: "Network",
      name: "Wifi"
    }, {
      icon: "fa-solid fa-speaker",
      id: 6,
      image: "https://www.audiocontrol.com/wp-content/uploads/2020/05/new-home-theater-web-slide-v1.jpg",
      label: "Audio",
      name: "Home Speakers"
    }].map((tool: any) => {
      const styles: React.CSSProperties = {
        backgroundImage: `url(${tool.image})`  
      }
      
      return (
        <div key={tool.id} className="tool-card">
          <div className="tool-card-background background-image" style={styles} />
          <div className="tool-card-content">            
            <div className="tool-card-content-header">            
              <span className="tool-card-label">{tool.label}</span>
              <span className="tool-card-name">{tool.name}</span>
            </div>
            <i className={classNames(tool.icon, "tool-card-icon")} />
          </div>
        </div>
      );
    })
  }
  
  return (
    <MenuSection icon="fa-solid fa-rectangles-mixed" id="tools-section" title="Other Controls">
      {getTools()}
    </MenuSection>
  );
}

const Restaurants: React.FC = () => {  
  const getRestaurants = (): JSX.Element[] => {
    return [{
      desc: "Lights",
      id: 1,
      image: "https://hommes.studio/wp-content/uploads/what-is-brutalist-design-brutalist-furniture-1.jpg",
      title: "Living Room"
    } , {
      desc: "Lights",
      id: 2,
      image: "http://cdn.home-designing.com/wp-content/uploads/2019/02/master-bedroom-curtains.jpg",
      title: "Master Bedroom"
    }, {
      desc: "Lights",
      id: 3,
      image: "https://cdn.habitusliving.com/wp-content/uploads/CanadianBayMakerMayccDanielFuge_kitchen-island.jpg",
      title: "Kitchen"
    }, {
      desc: "Lights",
      id: 4,
      image: "http://cdn.home-designing.com/wp-content/uploads/2021/03/black-home-office.jpg",
      title: "Office"
    }].map((restaurant: any) => {
      const styles: React.CSSProperties = {
        backgroundImage: `url(${restaurant.image})`  
      }
      
      return (
        <div key={restaurant.id} className="restaurant-card background-image" style={styles}>
          <div className="restaurant-card-content">
            <div className="restaurant-card-content-items">
              <span className="restaurant-card-title">{restaurant.title}</span>
              <span className="restaurant-card-desc">{restaurant.desc}</span>  
            </div>
          </div>
        </div>
      )
    });
  }
  return(   
    <MenuSection icon="fa-regular fa-lightbulb" id="restaurants-section" title="Home Lighting Controls">
      {getRestaurants()}
    </MenuSection>
  )
}

const Movies: React.FC = () => {  
  const getMovies = (): JSX.Element[] => {
    return [{
      desc: "Dashboard Stats",
      id: 1,
      icon: "fa-solid fa-battery-full",
      image: "https://www.tesla.com/sites/default/files/powerwall/hero/D_PW_Hero_2880x1800.jpg",
      title: "Tesla Powerwall"
    }, {
      desc: "Energy Production",
      id: 2,
      icon: "fa-solid fa-solar-panel",
      image: "https://media.wired.com/photos/5db373b7dea30b00096c6bbe/16:9/w_2400,h_1350,c_limit/Transpo-Tesla_solar_roof.jpg",
      title: "Solar Power"
    }, {
      desc: "Your EV Charging Stats",
      id: 3,
      icon: "fa-solid fa-charging-station",
      image: "https://www.solarreviews.com/content/images/blog/post/focus_images/77_77-are-tesla-solar-panels-the-best-option.jpg",
      title: "Your Charging Station"
    }, {
      desc: "Your Home Security Overview",
      id: 4,
      icon: "fa-solid fa-camera-security",
      image: "https://www.safewise.com/app/uploads/facebook-security-control-panel-comparison.jpg",
      title: "Home Security System"
    }].map((movie: any) => {
      const styles: React.CSSProperties = {
        backgroundImage: `url(${movie.image})`  
      }
      
      const id: string = `movie-card-${movie.id}`;
      
      return (
        <div key={movie.id} id={id} className="movie-card">
          <div className="movie-card-background background-image" style={styles} />
          <div className="movie-card-content">
            <div className="movie-card-info">
              <span className="movie-card-title">{movie.title}</span>
              <span className="movie-card-desc">{movie.desc}</span>
            </div>
            <i className={movie.icon} />
          </div>
        </div>
      );
    })
  }

  return (
    <MenuSection icon="fa-solid fa-battery-bolt" id="movies-section" scrollable title="Other Dashboards">
      {getMovies()}    
    </MenuSection>
  );
}

interface IUserStatusButton {
  icon: string;
  id: string;
  userStatus: UserStatus;
}

const UserStatusButton: React.FC<IUserStatusButton> = (props: IUserStatusButton) => {  
  const { userStatus, setUserStatusTo } = React.useContext(AppContext);
  
  const handleOnClick = (): void => {
    setUserStatusTo(props.userStatus);
  }
  
  return(   
    <button   
      id={props.id} 
      className="user-status-button clear-button" 
      disabled={userStatus === props.userStatus}
      type="button" 
      onClick={handleOnClick}
    >      
      <i className={props.icon} />
    </button>
  )
}

const Menu: React.FC = () => {  
  return(   
    <div id="app-menu">      
      <div id="app-menu-content-wrapper">
        <div id="app-menu-content">
          <div id="app-menu-content-header">
            <div className="app-menu-content-header-section">
              <Info id="app-menu-info" />
              <Reminder />
            </div>
            <div className="app-menu-content-header-section">
              <UserStatusButton 
                icon="fa-solid fa-arrow-right" 
                id="sign-out-button" 
                userStatus={UserStatus.LoggedOut}
              />
            </div>
          </div>
          <QuickNav />
          <Weather />                  
          <Restaurants />
          <Tools />
          <Movies />
        </div>
      </div>
    </div>
  )
}

const Background: React.FC = () => {  
  const { userStatus, setUserStatusTo } = React.useContext(AppContext);
  
  const handleOnClick = (): void => {
    if(userStatus === UserStatus.LoggedOut) {
      setUserStatusTo(UserStatus.LoggingIn);
    }
  }
  
  return(   
    <div id="app-background" onClick={handleOnClick}>
      <div id="app-background-image" className="background-image" />
    </div>
  )
}

const Loading: React.FC = () => {  
  return(    
    <div id="app-loading-icon">
      <i className="fa-solid fa-spinner-third" />
    </div>
  )
}

interface IAppContext {
  userStatus: UserStatus;
  setUserStatusTo: (status: UserStatus) => void;
}

const AppContext = React.createContext<IAppContext>(null);

const App: React.FC = () => {
  const [userStatus, setUserStatusTo] = React.useState<UserStatus>(UserStatus.LoggedOut);
  
  const getStatusClass = (): string => {
    return userStatus.replace(/\s+/g, "-").toLowerCase();
  }
  
  return(
    <AppContext.Provider value={{ userStatus, setUserStatusTo }}>
      <div id="app" className={getStatusClass()}>
        <Info id="app-info" />
        <Pin />
        <Menu />
        <Background />   
        <div id="sign-in-button-wrapper">
          <UserStatusButton 
            icon="fa-solid fa-arrow-right" 
            id="sign-in-button" 
            userStatus={UserStatus.LoggingIn}
          />       
        </div>                      
        <Loading />
      </div>
    </AppContext.Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));