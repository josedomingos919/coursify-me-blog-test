 
import { Text } from "react-native"
import { PostType } from "../../../../store/reducers/post/types"
import { MoleculePostCard } from "../../molecule/postCard"
import { Container, FlatList } from "./style"

type Props = { 
    data?: Array<any> , //Array<PostType>, 
}

export const OrganismListPosts = ({ data = [{ id : 2}, { id : 3},{ id : 4},{ id : 5},] }: Props) => {

    const handleRefreshList = () =>{
    }

    const loadData = () =>{
    }

    return (
        <Container> 
            <FlatList
                horizontal={true}
                data={data}
                refreshing={false}
                onRefresh={handleRefreshList}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<></>} 
                onEndReached={loadData}
                onEndReachedThreshold={0.2}
                keyExtractor={(e: any, index: number) => index}
                renderItem={({ item, index }: any) =>  <MoleculePostCard />}
            /> 
        </Container>
    )
}