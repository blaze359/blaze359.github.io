import { useDynamicConfig } from "@statsig/react-bindings";

/**
 * Hook to access Statsig dynamic configs
 * @param configName - The name of the dynamic config in Statsig
 * @returns The dynamic config object with get methods
 *
 * Example usage:
 * const config = useStatsigConfig('my_config');
 * const value = config.get('key', 'defaultValue');
 */
export function useStatsigConfig(configName: string) {
    return useDynamicConfig(configName);
}
