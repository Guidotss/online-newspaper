import { Grid } from "@nextui-org/react";
import { FC } from "react"
import { AdminModal } from "../components/AdminModal";
import { JournalList } from "../components/JournalList";
import { NewsCard } from "../components/NewsCard";
import { AdminLayOut } from "../layout";


export const EditPage:FC = () => {
  return (
    <AdminLayOut>
        <Grid.Container>
          <JournalList/>
          <AdminModal/>
        </Grid.Container>
    </AdminLayOut>
  )
}