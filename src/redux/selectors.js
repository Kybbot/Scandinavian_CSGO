// Teams
export const getItems = (state) => state.teams.items;

export const getTeam = (state) => state.teams.team;
export const getMembers = (state) => state.teams.members;
export const getShowAbout = (state) => state.teams.showAbout;

export const getPlayers = (state) => state.teams.players;
export const getCountedPlayers = (state) => state.teams.countedPlayers;
export const getPlayer = (state) => state.teams.player;

export const getLoading = (state) => state.teams.loading;
export const getError = (state) => state.teams.error;

// Admin
export const getAdminTeams = (state) => state.admin.teams;
export const getAdminIsClosedTeams = (state) => state.admin.isClosedTeams;

export const getAdminPlayers = (state) => state.admin.players;
export const getAdminIsClosedPlayers = (state) => state.admin.isClosedPlayers;
