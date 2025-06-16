import { RootStackScreens, SettingStackScreens } from "../Globals/ScreensNames";

const config = {
    initialRouteName: RootStackScreens.Main,
    screens: {
        [RootStackScreens.Main]: 'main',
        [RootStackScreens.Setting]: {
            path: 'settings',
            screens: {
                [SettingStackScreens.SetCompanyId]: 'set-company-id',
            }
        },
        NotFound: '*',
    }
};


export const linkingConfig = {
    prefixes: [
        'myapp://',
        'https://myapp.com',
    ],
    config
};