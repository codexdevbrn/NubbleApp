import {useTheme} from '@shopify/restyle';
import {Theme} from '@theme/index';

export function useAppTheme() {
    return useTheme<Theme>();
}
