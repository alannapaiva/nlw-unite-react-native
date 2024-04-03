import { Text, View, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props){
    return (
        <View className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"> 
            <TouchableOpacity 
                activeOpacity={0.7}
                disabled={isLoading}
                {...rest}
                >
                    {isLoading ? (
                        <ActivityIndicator className="text-green-500"/>
                    ) : (
                        <Text className="text-green-500 text-base font-bold uppercase">
                            {title}
                        </Text>
                    )}
            </TouchableOpacity>
        </View>
    )
}