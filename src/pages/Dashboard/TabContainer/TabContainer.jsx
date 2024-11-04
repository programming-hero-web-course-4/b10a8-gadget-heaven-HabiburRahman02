
const TabContainer = () => {
    return (
        <TabList className={'flex gap-2'}>
            <Tab>
                <button className="btn btn-primary">Cart</button>
            </Tab>
            <Tab className={'btn btn-accent'}>Wishlist</Tab>
        </TabList>

    );
};

export default TabContainer;