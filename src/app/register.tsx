import { View, Image, StatusBar } from "react-native"
import { FontAwesome, MaterialIcons} from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Link } from "expo-router";
import React from "react";

export default function Register(){
    return(
        <View className="flex-1 bg-green-500 items-center justify-center p-8">
            <StatusBar barStyle="light-content" />
            <Image source={require("@/assets/logo.png")} className="h-16" resizeMode="contain"/>
            <View className="w-full mt-12 gap-3">
                <Input>
                    <FontAwesome name="user-circle" size={20} color={colors.green[200]} />
                    <Input.Field placeholder="Nome completo" />
                </Input>
                <Input>
                    <MaterialIcons name="alternate-email" size={20} color={colors.green[200]} />
                    <Input.Field placeholder="Email" />
                </Input>
                <Button title="Cadastrar"
                onPress={() => console.warn("clicou")}
                ></Button>
                <Link href="/register" className="text-gray-100 text-base font-bold text-center mt-8">
                    Ainda nao possui ingresso?
                </Link>
            </View>
        </View>
    )
}