export function initialize(container, application) {
  application.inject("component:show-board", "appRoute", "route:application") 
}

export default {
  name: 'current-path',
  initialize
};
