import {html} from '../../node_modules/lit-html/lit-html.js';
import {getItemById, editFurniture} from '../api/data.js';


const editTemplate = (furniture, onSubmit) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Edit Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control" id="new-make" type="text" name="make" .value=${furniture.make}>
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control " id="new-model" type="text" name="model"
                           .value=${furniture.model}>
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control " id="new-year" type="number" name="year"
                           .value=${furniture.year}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description"
                           .value=${furniture.description}>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price" .value=${furniture.price}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img" .value=${furniture.img}>
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material"
                           .value=${furniture.material}>
                </div>
                <input type="submit" class="btn btn-info" value="Edit"/>
            </div>
        </div>
    </form>`;

export async function editPage(context) {

    const furniture = await getItemById(context.params.id);


    context.render(editTemplate(furniture, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, {[k]: v}), {});

        if (Object.entries(data).filter(([k, v]) => k !== 'material').some(([k, v]) => v === '')) {
           return alert('Please fill all mandatory fields!');
        }

        data.price = Number(data.price);
        data.year = Number(data.year);

        await editFurniture(furniture._id, data);

        context.page.redirect('/');
    }
}