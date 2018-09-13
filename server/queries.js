var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/tdg';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllMaterials: getAllMaterials,
  getSingleMaterial: getSingleMaterial,
  createMaterial: createMaterial,
  updateMaterial: updateMaterial,
  removeMaterial: removeMaterial
};

function getAllMaterials(req, res, next) {
    db.any('select * from materials')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL materials'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function getSingleAMaterial(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.one('select * from materials where id = $1', pupID)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ONE material'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function createMaterial(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('insert into materials(name, breed, age, sex)' +
        'values(${name}, ${breed}, ${age}, ${sex})',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one Material'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function updateMaterial(req, res, next) {
    db.none('update materials set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
      [req.body.name, req.body.breed, parseInt(req.body.age),
        req.body.sex, parseInt(req.params.id)])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated Material'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function removeMaterial(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.result('delete from materials where id = $1', pupID)
      .then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} material`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
  }