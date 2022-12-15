import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { Grid, Card, DataGrid } from '@mui/material';
import MainCard from 'components/MainCard';

const Category = () => {
    return (
        <ComponentSkeleton>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MainCard title="Categories">
                        <h1>Category</h1>
                    </MainCard>
                </Grid>
            </Grid>
        </ComponentSkeleton>
    );
};

export default Category;
